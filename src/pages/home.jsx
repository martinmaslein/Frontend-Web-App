import React from 'react';
import CenterContent from "src/layouts/CenterContent.jsx";

function Home() {
	return (
		<CenterContent>

			<section class="bg-center bg-no-repeat bg-[url('https://media.timeout.com/images/102747673/image.jpg')] rounded-lg shadow-md p-8 bg-gray-700 bg-blend-multiply">
				<div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
					<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Desbloquea tu potencial musical con nosotros</h1>
					<p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">En Melody Marketplace nos enfocamos siempre en la satisfacción del cliente, brinando los últimos y mejores productos de calidad</p>
					<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
						<a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
							Get started
							<svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
						<a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
							Learn more
						</a>
					</div>
				</div>
			</section>


			<section class="text-gray-600 body-font">
				<div class="container px-5 py-24 mx-auto">
					<div class="flex flex-col text-center w-full mb-10">
						<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Otros Servicios</h1>
					</div>
					<div class="flex flex-wrap -m-4 text-center">
						<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div class="border-2 border-gray-200 px-4 py-6 rounded-lg text-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-shop text-red-500 mx-auto mb-3" viewBox="0 0 16 16">
									<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
								</svg>
								<h2 class="title-font font-medium text-2xl text-gray-900">Prueba en la tienda</h2>
							</div>
						</div>

						<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
								<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-tools text-red-500 mx-auto mb-3" viewBox="0 0 16 16">
									<path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z" />
								</svg>

								<h2 class="title-font font-medium text-2xl text-gray-900">Reparación</h2>
							</div>
						</div>
						<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
								<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-music-note-beamed text-red-500 mx-auto mb-3" viewBox="0 0 16 16">
									<path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
									<path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
									<path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
								</svg>

								<h2 class="title-font font-medium text-2xl text-gray-900">Lecciones</h2>
							</div>
						</div>
						<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">

								<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-headset text-red-500 mx-auto mb-3" viewBox="0 0 16 16">
									<path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
								</svg>

								<h2 class="title-font font-medium text-2xl text-gray-900">Soporte Online</h2>
							</div>
						</div>
					</div>
				</div>
			</section>


		</CenterContent>
	)
}

export default Home;
