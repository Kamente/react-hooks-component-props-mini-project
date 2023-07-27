import React from 'react';
import Article from './Article';

function ArticleList({ list }) {
    const List = list.map((item) => (
        <main key={item.id}>
            <Article
                title={item.title}
                date={item.date}
                preview={item.preview}
            />
        </main>
    ));

    return <>{List}</>;
}

export default ArticleList;