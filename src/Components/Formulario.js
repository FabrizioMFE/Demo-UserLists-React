import React, { Component } from "react";
import "../CSS/form.css";
import "../CSS/alertas.css";

export default class Formulario extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nombre: "",
			usuario: "",
			correo: "",
		};
	}

	AsignarValores = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	InsertarElemento = (e) => {
		e.preventDefault();
		this.props.FuncionAgregar(this.state.nombre, this.state.usuario, this.state.correo);
		this.LimpiarValores();
	};

	LimpiarValores = () => {
		this.setState({
			nombre: "",
			usuario: "",
			correo: "",
		});
	};

	render() {
		return (
			<div>
				<form id="FormularioReact" onSubmit={this.InsertarElemento}>
					<input
						type="text"
						id="nombre"
						name="nombre"
						placeholder="Escribe el nombre"
						required={true}
						value={this.state.nombre}
						onChange={this.AsignarValores}
					/>
					<input
						type="text"
						id="usuario"
						name="usuario"
						placeholder="Escribe el usuario"
						required={true}
						value={this.state.usuario}
						onChange={this.AsignarValores}
					/>
					<input
						type="email"
						id="correo"
						name="correo"
						placeholder="Escribe el correo"
						required={true}
						value={this.state.correo}
						onChange={this.AsignarValores}
					/>
					<div>
						<button className="success" type="submit">
							Agregar Usuario
						</button>
						<button className="warning" type="reset">
							Limpiar
						</button>
					</div>
				</form>
			</div>
		);
	}
}
