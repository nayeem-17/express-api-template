class IndexController {
    constructor () {}
    helloWorld = (req, res, next) => {
        res.json({ title: 'Express' });
    }

}
export default IndexController;
