import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Movie from 'material-ui-icons/Movie';


const Post =  (props) => (
    <Layout>
      <div  className="listStyle">

      <Card raised = {true} className="cardStyle" key={props.show.id}>
            <CardMedia
              title={props.show.name}
              image={props.show.image ? props.show.image.medium :'http://static.tvmaze.com/uploads/images/medium_portrait/4/10842.jpg'}
              img={props.show.image ? props.show.image.medium :'http://static.tvmaze.com/uploads/images/medium_portrait/4/10842.jpg'}
              className="cardMediaStyle"
            />
            <CardContent>
              <Typography type="headline" component="h2">
                 <div>{props.show.name}</div>
              </Typography>
                 {ReactHtmlParser(props.show.summary)}
            </CardContent>
            <CardActions>
                <Button raised color="primary" >
                  <Movie/>
                 IMDb
               </Button>
            </CardActions>
        </Card>
          </div>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post;
