import React, {useState} from 'react'
import css from "./css/Content.module.css";
import  {savedPosts} from "../posts.json";
import PostItem from './PostItem';
import Loader from './Loader';

function ContentHooks() {
    const [loaded, setLoaded] = useState(true);

  return (
    <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Posts</h1>
        </div>
        <div className={css.SearchResults}>
            {
                loaded === true ? (
                    <PostItem posts={savedPosts}/>
                ) : (<Loader />)
            }
            
        </div>
      </div>
  )
}

export default ContentHooks