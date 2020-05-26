export class Global {

    private URIS = { 
        "new_releases": "https://api.spotify.com/v1/browse/new-releases"
    }

    public getURIS(): any {
        return this.URIS;
    }
}
