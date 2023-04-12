import create from 'zustand';

const useQuestionStore = create(set => ({
    people: ['문제1', '문제2'],
    addPerson: person => set(state => ({ people: [...state.people, person] })),
}));

export default useQuestionStore;
