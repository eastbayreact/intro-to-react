import React from 'react';

export default ({ title, body }) => (
    <div className="comment">
      <div className="comment--title">
        { title }
      </div>
      <div className="comment--body">
        { body }
      </div>
    </div> 
)

