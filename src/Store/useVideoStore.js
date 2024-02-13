import create from 'zustand';

const useVideoStore = create((set) => ({
    selectedVideoId: null,
    setSelectedVideoId: (videoId) => set({ selectedVideoId: videoId }),
}));

export default useVideoStore;
