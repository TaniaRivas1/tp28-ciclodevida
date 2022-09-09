import React, { Component } from 'react';
import Genre from './Genre';
/*let genres = [
    {genre: 'Acción'},
    {genre: 'Animación'},
    {genre: 'Aventura'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Comedia'},
    {genre: 'Documental'},
    {genre: 'Drama'},
    {genre: 'Fantasia'},
    {genre: 'Infantiles'},
    {genre: 'Musical'}
]*/

class GenreInDb extends Component {
    constructor(){
        super()
        this.state = {
            genreList : []
        }
    }

    async componentDidMount(){
        //console.log('Se ha montado el componente');
        try {
            let response = await fetch('http://localhost:3001/api/genres');
            let result = await response.json();
            //console.log(result.data);
            this.setState({
                genreList: result.data
            })
        } catch (error) {
            console.error(error)
        }
    }

    mouse(){
        document.querySelector('div.fondoCaja').classList.add("bg-secondary")
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.mouse}>Genres in Data Base</h6>
                </div>
                <div className="card-body fondoCaja">
                    <div className="row">
                        {
                            this.state.genreList.map((genre,index)=>{
                                return  <Genre {...genre}  key={genre.title + index} />
                            })
                        }
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default GenreInDb;
