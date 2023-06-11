export const getSavedNoteIds = () => {
  const savedNoteIds = localStorage.getItem("saved_notes")
    ? JSON.parse(localStorage.getItem("saved_notes"))
    : [];

  return savedNoteIds;
};

export const savedNoteIds = (noteIdArr) => {
  if (noteIdArr.length) {
    localStorage.setItem("saved_notes", JSON.stringify(noteIdArr));
  } else {
    localStorage.removeItem("saved_notes");
  }
};

export const removeNoteId = (noteId) => {
  const savedNoteIds = localStorage.getItem("saved_notes")
    ? JSON.parse(localStorage.getItem("saved_notes"))
    : null;

  if (!savedNoteIds) {
    return false;
  }

  const updatedSavedNoteIds = savedNoteIds?.filter(
    (savedNoteId) => savedNoteId !== noteId
  );
  localStorage.setItem("saved_notes", JSON.stringify(updatedSavedNoteIds));

  return true;
};
