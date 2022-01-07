import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home"
import About from "./views/About/index"
import CreateAccount from "./views/CreateAccount/index"


const Routers = () => {

  return (

    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/create" exact component={CreateAccount} />



      </Switch>

    </BrowserRouter>
  )

}

export default Routers;