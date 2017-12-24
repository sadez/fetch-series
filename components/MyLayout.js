import Header from './Header';
import SimpleBottomNavigation from './BottomNav';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';


const Layout = (props) => (
  <div className="layoutStyle" >
    <Head>
       <title>Material ui app</title>
         <meta charSet="utf-8"/>
         <meta name="viewport" content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height"/>
         <meta name="theme-color" content="#000000"/>
         <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
     </Head>
      <Header/>

      <div className="paperStyle" >
        {props.children}
      </div>

      <SimpleBottomNavigation class="fixBottom"/>

    <style jsx global>{`
      body{
        margin : 0px;
      }
      .classflex {
          flex: 2;
      }
      .headerC: {
        width: '100%';
      }
      .menuButton: {
        margin-left: -12px;
        margin-right: 20px;
      }
      .layoutStyle{
        padding-top: 64px;
        display: block;
        background-color: #eeeeee ;
      }
      .paperStyle{
        //padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 5px;
        padding-right: 5px;
        background-color: #eeeeee !important;
        background: #eeeeee;
      }
      .cardStyle{
        max-width : 500px;
        //min-width : 45%;
        //margin-top: 20px;
        margin-right: 20px;
        margin-bottom: 8px;
        margin-left: 20px;
        width : 95%;
      }
      .listStyle{
        //padding: 16px;
        padding-left: 0px;
        padding-right: 0px;
        display: flex;
        //justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #eeeeee;
        background: #eeeeee;
      }
      .cardMediaStyle{
        height: 350px;
      }
      .rightIconButton{
        margin-right : 8px;
      }
      .fixBottom{
        width: 100%;
        top: 90%;
        left: auto;
        /* right: 0; */
        position: fixed;
      }
    `}</style>
  </div>
)

export default Layout;
