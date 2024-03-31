import React, { useState } from 'react';

function ExpandableParagraph({ initialContent, expandedContent }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p>
        {isExpanded ? expandedContent : initialContent}
        {!isExpanded && (
          <span onClick={() => setIsExpanded(true)} style={{ cursor: 'pointer', color: 'blue' }}>
            ... Show More
          </span>
        )}
        {isExpanded && (
          <span onClick={() => setIsExpanded(false)} style={{ cursor: 'pointer', color: 'blue' }}>
            ... Show Less
          </span>
        )}
      </p>
    </div>
  );
}

export default ExpandableParagraph;