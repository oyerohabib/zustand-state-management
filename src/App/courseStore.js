import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const courseStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== courseId),
    }));
    toast.error("successfully removed course", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId
          ? { ...course, completed: !course.completed }
          : course
      ),
    }));
    toast.info("course status toggled", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  },
});

const settingStore = (set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
});

const peopleStore = (set) => ({
  people: ["habib", "izzat", "sekinat", "ameenat", "samiat"],
  addPerson: (person) =>
    set((state) => ({
      people: [...state.people, person],
    })),
});

export const useCourseStore = create(
  devtools(
    persist(courseStore, {
      name: "courses",
    })
  )
);

export const useSettingStore = create(
  devtools(persist(settingStore, { name: "theme" }))
);

export const usePeopleStore = create(
  devtools(persist(peopleStore, { name: "people" }))
);
