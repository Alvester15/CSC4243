import React from 'react';
import { CardMedia } from '@mui/material';
import { useDrag } from 'react-dnd';

const DraggableCardMedia = ({ track, onDoubleClick, size }) => {
  const [{ isDragging }, dragRef, preview] = useDrag(() => ({
    type: 'card',
    item: { track },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    // Define the preview options here
  }));

  // Use the preview ref to connect the DragPreviewImage
  return (
      <CardMedia
        component="img"
        height={size}
        width={size}
        image={track.album.images[0].url}
        onDoubleClick={() => onDoubleClick(track)}
        ref={dragRef}
        sx={{
          cursor: isDragging ? 'copy' : 'pointer',
          opacity: isDragging ? 0.5 : 1,
          borderBottom: 2,
          borderColor: "#bebebe",
        }}
      />
  );
};

export default DraggableCardMedia;

