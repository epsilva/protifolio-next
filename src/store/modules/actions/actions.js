export function setTitleHeader(data) {
    return {
        type: '@actions/SET_TITLE_HEADER',
        payload: { data },
    };
}

export function viewDetail(data) {
    return {
        type: '@actions/VIEW_DETAIL',
        payload: { data },
    };
}
