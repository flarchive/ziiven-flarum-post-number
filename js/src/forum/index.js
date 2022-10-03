import app from 'flarum/forum/app';
import { extend } from 'flarum/extend';
import CommentPost from 'flarum/common/components/CommentPost';

app.initializers.add('post-number', () => {
  extend(CommentPost.prototype, 'headerItems', function(items){
    console.log(items);

    const postNumberText = app.translator.trans('post-number.forum.number-prefix', {number: this.attrs.post.data.attributes.number});

    console.log(postNumberText);
    // items.add(
    //   'post-number',
    //   this.attrs.post.data.attributes.number
    // );

    items.add(
      'post-number',
      <span className='postNumber'>
        {postNumberText}
      </span>
    );

  });
});