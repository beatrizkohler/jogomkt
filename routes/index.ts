import app = require("teem");
import Pergunta = require("../models/Pergunta");

class IndexRoute {
  public async index(req: app.Request, res: app.Response) {
    res.render("index.ejs", {
      layout: "layout",
    });
  }
  
  @app.route.methodName( app.root + "/fase")
  public async fase(req: app.Request, res: app.Response) {
    res.render("fase.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/criar-pergunta")
  public async criarPergunta(req: app.Request, res: app.Response) {
    res.render("criar-pergunta.ejs", {
      layout: "layout",
    });
  }

  @app.route.methodName( app.root + "/pergunta")
	public async dadosBanca(req: app.Request, res: app.Response) {
		
		
			res.render("pergunta.ejs", {
				layout: "layout",
	
			});
			return;
		}


}

export = IndexRoute;
