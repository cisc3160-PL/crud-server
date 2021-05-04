import buildAddCampus from './add-campus';

const addCampus = buildAddCampus();

const campusService = Object.freeze({
    addCampus
});

export default campusService;
export { addCampus };