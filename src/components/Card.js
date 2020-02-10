import React from 'react';

function Card(props) {

    const dragStart = e => {
        const target = e.target;
        // Insere um valor nos itens de drag. Esse valor pode ser resgatado em qualquer evento de drag posterior
        e.dataTransfer.setData('card_id', target.id);

         /**
          * setTimeout é usado porque quando se manipula o DOM em onDragStart, evento onDragEnd é disparado
          * (É um bug no Google Chrome)
          */
        setTimeout(() => {
            target.style.display = "none";
        },0);
    };

    /**
     * Disparado quando Card está se movimentando em cima do Card 
     */
    const dragOver = e => {
        e.stopPropagation();
    }

    // Disparado quando operação de drag é finalizada
    const dragEnd = e => {
        const target = e.target;
        setTimeout(() => {
            target.style.display = "block";
        },0);
    }

    return (
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragEnd={dragEnd}
            onDragOver={dragOver}
        >
            { props.children }
        </div>
    );
}

export default Card;