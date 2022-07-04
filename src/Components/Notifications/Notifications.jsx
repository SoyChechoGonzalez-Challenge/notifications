import React from 'react';
import Swal from 'sweetalert2'

const MySwal = () => {
	const Alert = () => {
		Swal.fire({
			title: 'Alert',
			text: 'Esto es una alerta',
			confirmButtonText: 'Cool'
		})
	}
	const Notification = () => {
		Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Your work has been saved',
			showConfirmButton: false,
			timer: 1500
		})
	}
	return (
		<>
			<button onClick={() => Alert() }>Alert</button>
			<button onClick={() => Notification() }>Notification</button>
		</>
	)
}

export default MySwal
