import React from 'react';

/**
 * Disparado quando Card é solto dentro do Board
 */
function Board(props) {
    const drop = e => {
        e.preventDefault();

        let target = e.target;

        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        target.appendChild(card);

        target.style.backgroundColor = 'black';
    };

    /**
     * Disparado quando Card está se movimentando em cima do Board 
     */
    const dragOver = e => {
        e.preventDefault();
    };

    /**
     * Disparado quando Card está dentro do Board 
     */
    const dragEnter = e => {
        e.preventDefault();
        e.stopPropagation();
        const target = e.target;
        if(target.classList.contains('board')) {
            target.style.backgroundColor = 'pink';
        }
    };

    /**
     * Disparado quando Card está fora do Board 
     */
    const dragLeave = e => {
        e.preventDefault();
        const target = e.target;
        if(target.classList.contains('board')) {
            target.style.backgroundColor = 'black';
        }
    };

    return (
        <div 
            id={props.id} 
            className={props.className}
            onDrop={drop} 
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDragOver={dragOver}
        >
            { props.children }    
        </div>
    );
}

export default Board;