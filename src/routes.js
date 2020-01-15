import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import QuemSomos from './pages/quemsomos/index';
import Tutoriais from './pages/tutoriais/index';
import Notíciais from './pages/notícias/index';
import Metodologia from './pages/metodologia/index';
import FaleConosco from './pages/FaleConosco/index';

function Routes() {
    return(
        <Switch>
            <Route path="/ura" exact component={Home} />
            <Route path="/ura/quem-somos" component={QuemSomos} />
            <Route path="/ura/tutoriais" component={Tutoriais} />
            <Route path="/ura/noticiais" component={Notíciais} />
            <Route path="/ura/metodologia" component={Metodologia} />
            <Route path="/ura/contato" component={FaleConosco} />
        </Switch>
    )
}

export default Routes;