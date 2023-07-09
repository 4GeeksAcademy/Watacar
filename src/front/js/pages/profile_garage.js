import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { NavLink, Link } from "react-router-dom";
import { Profile_navbar } from "../component/profile_navbar";
import "/workspaces/Watacar_v2/src/front/styles/profile.css"

export const Profile_garage = () => {
    const {actions, store} = useContext(Context);

    useEffect (() => {
        actions.getGarages()
    }, [])
    return store.user ? (
        <>
            <Profile_navbar />
            <div className="container_profile">
                <div className="avatar_container">
                    <img src="https://neomotor.epe.es/binrepository/990x619/0c62/990d557/none/2594535/UHEL/elegir-taller-confianza-1_285-37667622_20221031082702.jpg" alt="Avatar" className="avatar_image" />
                </div>
                {store.garages.map((garage, index) => {
                return (
                <div className="profile_info">
                    <div className="row row_profile_configuration">
                        <h4 className="col-3 label input-radius">Nombre del Taller:</h4>
                        <h4 className="col-8 user_data">{garage.name}</h4>
                    </div>
                    <div className="row row_profile_configuration">
                        <h4 className="col-3 label input-radius">Correo del Taller:</h4>
                        <h4 className="col-8 user_data">{garage.email}</h4>
                    </div>
                    <div className="row row_profile_configuration">
                        <h4 className="col-3 label input-radius">Sitio Web:</h4>
                        <h4 className="col-8 user_data">{garage.web}</h4>
                    </div>
                    <div className="row row_profile_configuration">
                        <h4 className="col-3 label input-radius">CIF:</h4>
                        <h4 className="col-8 user_data">{garage.cif}</h4>
                    </div>
                    <div className="row row_profile_configuration">
                        <h4 className="col-3 label input-radius">Teléfono :</h4>
                        <h4 className="col-8 user_data">{garage.phone}</h4>
                    </div>
                    <div className="row row_profile_configuration " >
                        <h4 className="col-3 label input-radius" >Dirección:</h4>
                        <h4 className="col-8 user_data">{garage.address}</h4>
                    </div>

              
                    <div className="row row_profile_configuration " >
                        <h4 className="col-3 label input-radius" >Servicios que ofrecemos:</h4>
                        <h4 className="col-8 user_data">{garage.services}</h4>
                    </div>

                    <div className="row row_edit_profile">
                        <Link to="/configuration" className="edit_profile col-3 label">
                            Editar 
                        </Link>
                    </div>
                </div>

                )


                })}
            </div>
        </>
    ): "cargando...";
}