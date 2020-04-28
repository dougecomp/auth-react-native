interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function signIn(): Promise<Response>{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                {
                    token: 'ada3849q01iahdaosdha',
                    user: {
                        name: 'Douglas',
                        email: 'douglas@douglas.com.br'
                    }
                }
            );
        }, 2000);
    })
}