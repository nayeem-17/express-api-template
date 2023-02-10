import express, { Router } from 'express';
import { IndexController } from '../controller/index.controller';

/* GET home page. */

export class IndexRouter {
  private indexRouter: Router;
  private controller: IndexController;
  constructor() {
    this.indexRouter = express.Router();
    this.controller = new IndexController();
  }
  /**
   * routes
   */
  public routes(): Router {
    this.indexRouter.get('/', this.controller.helloWorld);
    this.indexRouter.get('/get/:id', this.controller.getManager);
    return this.indexRouter;
  }
}

// // blog.controller.ts (continued)

// export class BlogController {
//   private blogService: BlogService;

//   constructor() {
//     this.blogService = new BlogService();
//   }

//   async getBlogs(req: Request, res: Response) {
//     try {
//       const blogs = await this.blogService.getBlogs();
//       res.status(200).json({
//         data: blogs,
//         message: 'Blogs retrieved successfully'
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: 'Failed to retrieve blogs'
//       });
//     }
//   }

//   async getBlogById(req: Request, res: Response) {
//     try {
//       const blog = await this.blogService.getBlogById(req.params.id);
//       if (!blog) {
//         return res.status(404).json({
//           message: 'Blog not found'
//         });
//       }
//       res.status(200).json({
//         data: blog,
//         message: 'Blog retrieved successfully'
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: 'Failed to retrieve blog'
//       });
//     }
//   }

//   async createBlog(req: Request, res: Response) {
//     try {
//       const blog = await this.blogService.createBlog(req.body);
//       res.status(201).json({
//         data: blog,
//         message: 'Blog created successfully'
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: 'Failed to create blog'
//       });
//     }
//   }

//   async updateBlog(req: Request, res: Response) {
//     try {
//       const blog = await this.blogService.updateBlog(req.params.id, req.body);
//       if (!blog) {
//         return res.status(404).json({
//           message: 'Blog not found'
//         });
//       }
//       res.status(200).json({
//         data: blog,
//         message: 'Blog updated successfully'
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: 'Failed to update blog'
//       });
//     }
//   }

//   async deleteBlog(req: Request, res: Response) {
//     try {
//       const blog = await this.blogService.deleteBlog(req.params.id);
//       if (!blog) {
//         return res.status(404).json({
//           message: 'Blog not found'
//         });
//       }
//       res.status(200).json({
//         message: 'Blog deleted successfully'
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: 'Failed to delete blog'
//       });
//     }
//   }
// }
