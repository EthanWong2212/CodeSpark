import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from'./Pages/About';
import Curriculum from './Pages/Curriculum';
import Projects from './Pages/Projects';
import Overview from './Pages/Overview';
import TitleComponent from './Pages/components/TitleComponent';

const withTitle=({page: Component, title})=>{
    return class Title extends React.Component{
        render(){
            return(
                <React.Fragment>
                    <TitleComponent title={title}/>
                    <Component {...this.props}/>
                </React.Fragment>
            )
        }
    }
}
const HomePage= withTitle({page:Home, title:'CS-Home'});
const AboutPage= withTitle({page:About, title:'CS-About'});
const CurriculumPage= withTitle({page:Curriculum, title:'CS-Curriculum'});
const ProjectsPage= withTitle({page:Projects, title:'CS-Projects'});
const OverviewPage= withTitle({page:Overview, title:'CS-Overview'});

function PageRouter(){
    return(
        <Route>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/curriculum" component={CurriculumPage}/>
                <Route path="/projects" component={ProjectsPage}/>
                <Route path="/overview" component={OverviewPage}/>
            </Switch>
        </Route>
    )
}

export default PageRouter;