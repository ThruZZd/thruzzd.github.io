//import { client } from '/tina/__generated__/client'

const Newsfeed = () => {
    const news = [
        {title: "Titel1", body: "Body 1", date: "07.06.2024", id:1},
        {title: "Titel2", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, facere incidunt! Non quia similique voluptates, delectus inventore voluptate, ratione, alias illo cumque modi perferendis dolores id aut sed exercitationem provident!", date: "06.06.2024", id:2},
        {title: "Titel3", body: "Body 3", date: "02.06.2024", id:3}        
    ];

   
    
    
    return (
        <div className="newsFeed">
            {news.map((article) => (
                <div className="newsPost" key={article.id}>
                    <h2>{article.title}</h2>
                    <span className="date">{article.date}</span>
                    <p>{article.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Newsfeed;