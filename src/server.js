import { createServer,Model } from "miragejs"

export const makeServer=()=>{
    let server=createServer({
        models:{
            player:Model,
        },
        seeds(server){
            server.create("player",{ id:1,name: 'John Doe', games: [
              {pts:24, fpt:14,fps:7,tpt:4,tps:3,ftt:10,fts:10,reb:6,ast:3,blk:0,stl:3,min:15,fou:2},
              {pts:10, fpt:10,fps:8,tpt:4,tps:3,ftt:8,fts:7,reb:6,ast:3,blk:0,stl:3,min:22,fou:3},
              {pts:20, fpt:13,fps:10,tpt:4,tps:3,ftt:10,fts:10,reb:6,ast:3,blk:7,stl:3,min:10,fou:2},
              {pts:13, fpt:16,fps:7,tpt:4,tps:3,ftt:12,fts:7,reb:6,ast:3,blk:0,stl:3,min:12,fou:5},
              {pts:10, fpt:15,fps:9,tpt:4,tps:3,ftt:10,fts:10,reb:6,ast:3,blk:7,stl:3,min:18,fou:3},
              {pts:18, fpt:10,fps:5,tpt:4,tps:3,ftt:10,fts:10,reb:6,ast:3,blk:0,stl:3,min:3,fou:1},
            ] });
            server.create("player",{ id:2,name: 'Dusko Peric', games: [
              {pts:7, fpt:5,fps:2,tpt:2,tps:1,ftt:0,fts:0,reb:6,ast:5,blk:4,stl:2,min:10,fou:3},
              {pts:5, fpt:4,fps:1,tpt:4,tps:3,ftt:8,fts:7,reb:6,ast:7,blk:2,stl:1,min:15,fou:2},
              {pts:10, fpt:3,fps:2,tpt:4,tps:2,ftt:8,fts:6,reb:6,ast:4,blk:5,stl:5,min:12,fou:2},
              {pts:8, fpt:5,fps:3,tpt:7,tps:1,ftt:10,fts:9,reb:6,ast:10,blk:3,stl:3,min:9,fou:1},
              {pts:3, fpt:2,fps:0,tpt:1,tps:1,ftt:0,fts:0,reb:6,ast:8,blk:6,stl:4,min:13,fou:4},
              {pts:6, fpt:7,fps:1,tpt:0,tps:0,ftt:6,fts:4,reb:6,ast:5,blk:3,stl:1,min:14,fou:5},
            ] });
        },
        routes() {
            this.namespace='api';
          this.get("/players", () => this.schema.players.all());
          this.patch("/player/:id",(schema,request)=>{
            let newGame=JSON.parse(request.requestBody);
            let id = request.params.id;
            let player=schema.players.find(id)
            let games=[...player.games,newGame]
            return player.update({games:games})
          })
          this.get("/player/:id",(schema,request)=>{
            let id = request.params.id;
            let player=schema.players.find(id);
            return player.games;
          })
        },
      })
      return server;
}
