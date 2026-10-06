function chargerCommentaires(cardId) {

    const url =
        "https://api.trello.com/1/cards/" +
        cardId +
        "/actions?filter=commentCard" +
        "&key=" + API_KEY +
        "&token=" + TOKEN;

    return fetch(url)
        .then(response => response.json());

}
