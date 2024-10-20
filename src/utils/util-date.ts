import moment from 'moment';

export function formatDate(date: string) {
  return moment(date).format('MMM DD, YYYY hh:mm A');
}
