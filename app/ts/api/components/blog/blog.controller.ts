import { Request, Response } from "express";
import { BlogService } from "../../../services/blog.service";
import { BlogModel } from "../../../models/blog";
import { MemberBlogService } from "../../../services/memberBlog.service";
import { roleService } from "../../../services/role.service";




export class BlogController {

  public static blogService: BlogService;
  public static memberBlogService: MemberBlogService;
  public static roleService: roleService;

  constructor() {
    BlogController.blogService = new BlogService();
    BlogController.memberBlogService = new MemberBlogService();
    BlogController.roleService = new roleService();
  }


  public async getBlogById(req: Request, res: Response) {
    try {
      const blog: BlogModel = await BlogController.blogService.getBlogbyId(req.body.id);

      res.status(200).send(blog);
    } catch (error) {
      console.log(error);
      res.status(401).send("geting blog by id is failed");
    }
  }

  public async getBlogs(req: Request, res: Response) {
    try {

      const blogs: BlogModel[] = await BlogController.blogService.getAllBlogs();
      res.status(200).send(blogs);
    } catch (error) {
      res.status(401).send("geting blogs is failed");
    }
  }

  public async createBlog(req: Request, res: Response) {

    const newBlog: BlogModel = {
      header: req.body.header,
      body: req.body.body,
    }

    const userId = res.locals.userId

    try {

      //create new blog
      const blog = await BlogController.blogService.createBlog(newBlog, userId);

      //find role Id
      // const roleId = await BlogController.roleService

      //create role of blog for user
      const assoUserBlog = await BlogController.memberBlogService.addMemberbyUserId(userId, blog.id as string, 1)

      res.status(200).send({ message: "creating blog was successfully", blog: blog });
    } catch (error) {
      res.status(403).send({ message: "creating new blog was failed" });
    }
  } 


  public async updateBlog(req: Request, res: Response) {
    try {
      const blogDetail:BlogModel ={...req.body}
      const result = await BlogController.blogService.updateBlogById(blogDetail)
      res.status(200).send({message:"updating blog was successfully"});
    } catch (error) {
      res.status(403).send("updateing blog by id is failed");
    }
  }


  public async deleteBlog(req: Request, res: Response) {

    const userId = res.locals.userId
    const blogId = req.params.id;

    try {
      if(!userId || !blogId){
        res.status(403).send({message:"deleting blog was failed"})
      }
      const resultMember = await BlogController.memberBlogService.deleteMember(blogId);
      const resBlog = await BlogController.blogService.deleteBlogById(blogId);

      res.status(200).send({message:"deleting blog was successfully"});

    } catch (error) {
      res.status(403).send("deleting blog was failed");
    }
  }

}

export default new BlogController();
