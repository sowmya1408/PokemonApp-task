
export const GetPokemons = async (url) => {
    const queryToUrl = await fetch(url);
    const getResponseInJson = await queryToUrl.json();
    return getResponseInJson;
}
