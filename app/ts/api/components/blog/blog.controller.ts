import { Request, Response } from "express";
import { BlogService } from "../../../services/blog.service";
import { BlogModel } from "../../../models/blog";



export class BlogController {

  public static blogService: BlogService;
  
  constructor() {
    BlogController.blogService = new BlogService();
  }



  public async getBlogById(req: Request, res: Response) {
    // try {
    //   const id = req.params.id;
    //   const blog: BlogModel = await BlogController.blogService.getBlogbyId(id)

    //   res.status(200).send(blog);
    // } catch (error) {
    //   console.log(error);
    //   res.status(404).send("geting blog by id is failed");
    // }
  }
  public async getBlogs(req: Request, res: Response) {
    // try {
      
    //   const blogs:BlogModel[] = await BlogController.blogService.getAllBlogs();
    //   res.status(200).send(blogs);
    // } catch (error) {
    //   res.status(404).send("geting blogs is failed");
    // }
  }
  public async createBlog(req: Request, res: Response) {
    try {
      const newBlog: BlogModel ={ ...req.body}
      console.log("req ", newBlog)
      // await BlogController.blogService.createBlog(newBlog);
      res.status(200).send("creating new blog is success");
    } catch (error) {
      res.status(404).send("creating new blog is failed");
    }
  }
  public async updateBlogById(req: Request, res: Response) {
    try {
    
      res.status(200).send("updateing blog by id is success");
    } catch (error) {
      res.status(404).send("updateing blog by id is failed");
    }
  }
  public async deleteBlogById(req: Request, res: Response) {
    try {
      const blogId = req.params.id;
      const blogs =await BlogController.blogService.deleteBlog(blogId);
      res.status(200).send(blogs);
    } catch (error) {
      res.status(404).send("deleting blog by id is failed");
    }
  }

}

export default new BlogController();
