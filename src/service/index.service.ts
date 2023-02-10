import IndexRepository from '../repository/index.repository';

export class IndexService {
  private indexRepository: IndexRepository;
  constructor() {
    this.indexRepository = new IndexRepository();
  }
  public getManager(id: string) {
    return this.indexRepository.getManager(id);
  }
}

// // blog.service.ts
// import { BlogRepository } from './blog.repository';
// import { IBlog } from './blog.model';

// export class BlogService {
//   private blogRepository: BlogRepository;

//   constructor() {
//     this.blogRepository = new BlogRepository();
//   }

//   async getBlogs(): Promise<IBlog[]> {
//     return await this.blogRepository.getBlogs();
//   }

//   async getBlogById(id: string): Promise<IBlog> {
//     return await this.blogRepository.getBlogById(id);
//   }

//   async createBlog(blog: IBlog): Promise<IBlog> {
//     return await this.blogRepository.createBlog(blog);
//   }

//   async updateBlog(id: string, blog: IBlog): Promise<IBlog> {
//     return await this.blogRepository.updateBlog(id, blog);
//   }

//   async deleteBlog(id: string): Promise<IBlog> {
//     return await this.blogRepository.deleteBlog(id);
//   }
// }
