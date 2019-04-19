import React, {Component} from 'react';
import ImageThumbnail from "./ImageThumbnail";
import {Link} from "react-router-dom";
import {getAlbums, getArtist} from "../store/actions/musicActions";
import connect from "react-redux/es/connect/connect";

class TrackInfo extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getArtist(id);
        this.props.getAlbum(id);
    }

    getTracks = id => {
        console.log(id);
    };

    render() {
        console.log(this.props.match.params);
        if (this.props.artist) console.log(this.props.artist);
        return (
            <div>
                <div className="column">
                    <p className="album_p">Альбомы</p>
                    <div className="one_artist">
                        {this.props.artist ? <div className="artist_thumbnail" key={this.props.artist._id}  onClick={this.getTracks}>
                            <ImageThumbnail image={this.props.artist.image}/>
                            <p>{this.props.artist.name}</p>
                            <p>{this.props.artist.description}</p>
                        </div> : null}
                    </div>
                    {this.props.album ? <div className="artist_thumbnail">
                            <ImageThumbnail image={this.props.album.image}/>
                            <p>{this.props.album.title}</p>
                            <p>{this.props.album.year}-год</p>
                        </div> : null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    artist: state.response.artist,
    album: state.response.album,
});

const mapDispatchToProps = dispatch => ({
    getArtist: (id) => dispatch(getArtist(id)),
    getAlbum: (albumId) => dispatch(getAlbum(albumId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackInfo);