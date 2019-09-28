'use strict';

module.exports = Franz => {
  const getMessages = () => {
    const element = document.querySelector('[href="/notifications"] > div');
    const content = window.getComputedStyle(element, ':after').getPropertyValue('content').match(/\d+/);
    const notifications = Number(content);

    Franz.setBadge(notifications);
  };

  Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhzcGVjdHJ1bS93ZWJ2aWV3LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJGcmFueiIsImdldE1lc3NhZ2VzIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm1hdGNoIiwibm90aWZpY2F0aW9ucyIsIk51bWJlciIsInNldEJhZGdlIiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQkMsU0FBUztBQUN4QixRQUFNQyxjQUFjLE1BQU07QUFDeEIsVUFBTUMsVUFBVUMsU0FBU0MsYUFBVCxDQUF1QiwrQkFBdkIsQ0FBaEI7QUFDQSxVQUFNQyxVQUFVQyxPQUNiQyxnQkFEYSxDQUNJTCxPQURKLEVBQ2EsUUFEYixFQUViTSxnQkFGYSxDQUVJLFNBRkosRUFHYkMsS0FIYSxDQUdQLEtBSE8sQ0FBaEI7QUFJQSxVQUFNQyxnQkFBZ0JDLE9BQU9OLE9BQVAsQ0FBdEI7O0FBRUFMLFVBQU1ZLFFBQU4sQ0FBZUYsYUFBZjtBQUNELEdBVEQ7O0FBV0FWLFFBQU1hLElBQU4sQ0FBV1osV0FBWDtBQUNELENBYkQiLCJmaWxlIjoid2l0aHNwZWN0cnVtL3dlYnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IEZyYW56ID0+IHtcbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tocmVmPVwiL25vdGlmaWNhdGlvbnNcIl0gPiBkaXYnKVxuICAgIGNvbnN0IGNvbnRlbnQgPSB3aW5kb3dcbiAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsICc6YWZ0ZXInKVxuICAgICAgLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKVxuICAgICAgLm1hdGNoKC9cXGQrLylcbiAgICBjb25zdCBub3RpZmljYXRpb25zID0gTnVtYmVyKGNvbnRlbnQpXG5cbiAgICBGcmFuei5zZXRCYWRnZShub3RpZmljYXRpb25zKVxuICB9XG5cbiAgRnJhbnoubG9vcChnZXRNZXNzYWdlcylcbn1cbiJdfQ==