class IndexRepository {
  // constructor() {
  //   super();
  // }
  public getManager = async (param: string) => {
    const query = `SELECT * from global_name`;
    const params = [param];
    // const result = await this.query(query, params);
    return;
  };
}

export default IndexRepository;

// // blog.repository.ts
// import { Blog, IBlog } from './blog.model';

// export class BlogRepository {
//   async getBlogs(): Promise<IBlog[]> {
//     return await Blog.find({}).exec();
//   }

//   async getBlogById(id: string): Promise<IBlog> {
//     return await Blog.findById(id).exec();
//   }

//   async createBlog(blog: IBlog): Promise<IBlog> {
//     return await Blog.create(blog);
//   }

//   async updateBlog(id: string, blog: IBlog): Promise<IBlog> {
//     return await Blog.findByIdAndUpdate(id, blog, { new: true }).exec();
//   }

//   async deleteBlog(id: string): Promise<IBlog> {
//     return await Blog.findByIdAndDelete(id).exec();
//   }
// }
