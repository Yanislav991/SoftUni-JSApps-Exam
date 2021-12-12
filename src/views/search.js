import { getSearchedAlbums } from '../api/data.js';
import {html} from '../lib.js';
import { getUserData } from '../util.js';

const searchTemplate = (albums, onSubmit) => html`
<section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input  id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button @click=${onSubmit} class="button-list">Search</button>
            </div>

            <h2>Results:</h2>

            <div class="search-result">
            ${albums.length ==0 
                ? html`<p class="no-result">No result.</p>`
                : albums.map(albumCard)} 

            </div>
        </section>`

  

const albumCard = (album) => html`
<div class="card-box">
                    <img src=${album.imgUrl}>
                    <div>
                        <div class="text-center">
                            <p class="name">Name: ${album.name}</p>
                            <p class="artist">Artist: ${album.artist}</p>
                            <p class="genre">Genre: ${album.genre}</p>
                            <p class="price">Price: ${album.price}</p>
                            <p class="date">Release Date: ${album.releaseDate}</p>
                        </div>
                        <div class="btn-group">
                        ${getUserData() ? html`<a href="/details/${album._id}" id="details">Details</a>` : null} 
                            
                        </div>
                    </div>
                </div>
`


export function searchPage(ctx){
    const ablums = [];
    ctx.render(searchTemplate(ablums, onSubmit));
    async function onSubmit(e){
        e.preventDefault();
        var searchTerm = document.getElementById('search-input').value;
        
        const albumsSearched = await getSearchedAlbums(searchTerm);
        console.log(albumsSearched)
        ctx.render(searchTemplate(albumsSearched, onSubmit));
        
    }
}