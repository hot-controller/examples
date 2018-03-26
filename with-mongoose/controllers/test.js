import { Controller, Route } from 'hot-controller';
import { Post } from '../models';

@Controller('/test')
export default class HomeController {
  @Route.GET('/')
  async getAll(req, res) {
    res.json(await Post.find({}));
  }

  @Route.POST('/add')
  async add(req, res) {
    const post = new Post();
    post.title = 'My title here';
    post.content = 'My content here';

    res.json(await post.save());
  }
}
