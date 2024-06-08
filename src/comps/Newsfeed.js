import { useState, useEffect } from 'react';




const Newsfeed = ({fetchednews}) => {
console.log(fetchednews[0].data.news.date);

var fnarray = [];
for(let i=0;i<fetchednews.length;i++){
    fnarray.push(fetchednews[i])
}

fnarray.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.data.news.date) - new Date(a.data.news.date);
  });

console.log(fnarray);

    return (
        <div className="newsFeed">
            {fnarray.map((article) => (
                <div className="newsPost" key={article.data.news.id}>
                    <h2>{article.data.news.title}</h2>
                    <span className="date">{article.data.news.date}</span>
                    <p>{article.data.news.body.children[0].children[0].text}</p>
                </div>
            ))}
        </div>
    );
}

export default Newsfeed;