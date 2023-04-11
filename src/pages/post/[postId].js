"user client"
const post = ({params}) => {
    console.log("params", params);
    return (
        <div>
            <h2> users{params.userId} </h2>
        </div>
    );
};

export const getStaticPaths = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const posts = await res.json();
    const paths = posts.map( post => {
        params:{
            postId:`${post.id}`,
        }
    })
    return{
        paths,
        fallback:false,
    }
}
export default post;