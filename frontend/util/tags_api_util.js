
export const fetchAllTags = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/tags'
  });
};

export const fetchTag = tagId => {
  return $.ajax({
    method: 'GET',
    url: `api/tag/${tagId}`
  });
};

export const createTag = tag => {
  return $.ajax({
    method: 'POST',
    url: 'api/tags',
    data: {
      tag: {
        name: tag.name,
        owner_id: tag.ownerId
      }
    }
  });
};

export const updateTag = tag => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tag/${tag.id}`,
    data: {
      tag: {
        name: tag.name,
        owner_id: tag.ownerId
      }
    }
  });
};

export const deleteTag = tagId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tag/${tagId}`
  });
};