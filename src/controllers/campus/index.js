import { addCampus } from '../../use-cases/campus';

import buildPostCampus from './post-campus';

const postCampus = buildPostCampus({ addCampus });

const campusController = Object.freeze({
    postCampus
});

export default campusController;
export { postCampus };