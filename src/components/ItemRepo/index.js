import React from 'react';

import { ItemContainer } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {
    const handleRemove = (e) => {
        e.stopPropagation();
        handleRemoveRepo(repo.id);
    };

    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel="noreferrer" target="_blank">
                ver Repositorio
            </a>
            <br />
            <a href="#" rel="noreferrer" className="remover" onClick={handleRemove}>
                Remover
            </a>
            <hr />
        </ItemContainer>
    );
}

export default ItemRepo;