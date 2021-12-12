import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export function getAllAlbums(){
    return api.get('/data/albums?sortBy=_createdOn%20desc&distinct=name')
}
export function getAlbumById(id){
    return api.get('/data/albums/'+ id)
}
export function deleteById(id){
    return api.del('/data/albums/' + id)
}
export function createAlbum(album){
    return api.post('/data/albums', album)
}
export function editAlbum(id, album){
    return api.put('/data/albums/'+id,album )
}
export function getSearchedAlbums(searchTerm){
    return api.get(`/data/albums?where=name%20LIKE%20%22${searchTerm}%22`)
}