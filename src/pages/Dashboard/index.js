import React, { useState, useMemo, useEffect } from 'react';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  isBefore,
  setSeconds,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';
import { Container, Time } from './styles';

const SCHEDULE_RANGE = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedules, setSchedules] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  // para fazer chamadas a api, sempre que o estado date mudar :^)
  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });

      // Timezone do usuário
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = SCHEDULE_RANGE.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(a =>
            isEqual(parseISO(a.date), compareDate)
          ),
        };
      });
      setSchedules(data);
    }

    loadSchedule();
  }, [date]);

  function handlePreviousDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePreviousDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>

        <strong>{dateFormatted}</strong>

        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        {schedules.map(schedule => (
          <Time
            key={schedule.time}
            past={schedule.past}
            available={!schedule.appointment}
          >
            <strong>{schedule.time}</strong>
            <span>
              {schedule.appointment
                ? schedule.appointment.user.name
                : 'Em aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
