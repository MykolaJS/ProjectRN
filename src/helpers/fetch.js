export default fetchURL = request => fetch(request).then(response => {
    const { status } = response;
    if (status === 200 || status === 201) return response.json();
   	return response.json().then(resp => {
       	const error = resp.message;
       	throw new Error(error)
    })
})