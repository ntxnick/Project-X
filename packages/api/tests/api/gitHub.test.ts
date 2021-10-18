import "jest";
import { gitHub  } from "../../src/api/auth/gitHub";
import { testHandler } from "../testUtils/testHandler";
import { env } from '../../src/__mocks__/env';

const gitHubId = process.env.GITHUB_ID_TEST;

const url = `https://github.com/login/oauth/authorize?client_id=${gitHubId}&redirect_uri=http://localhost:3000/api/auth/github/callback`;

describe('/GitHub endpoints',() => {
    beforeEach(async () => {
        jest.clearAllMocks();
    });

   it('Goes to GitHub link for user to Login', async () => {
   
        await testHandler(gitHub)
        .get('/github/login')
        .expect(302)
        .expect('Location', url);

   });

});
