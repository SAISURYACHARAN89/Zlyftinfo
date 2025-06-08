'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  FaBox,
  FaCogs,
  FaWarehouse,
  FaUserCheck,
  FaRocket
} from 'react-icons/fa';

export default function DroneDeliveryTimeline() {
  // Common content styles
  const contentStyle = {
    background: '#f5f5f5',
    color: '#000',
    boxShadow: '0 3px 8px rgba(0,0,0,0.1)'
  };

  const arrowStyle = {
    borderRight: '7px solid #f5f5f5'
  };

  return (
    <VerticalTimeline lineColor="#ccc">
      <VerticalTimelineElement
        className="vertical-timeline-element--order"
        date="09:29 AM"
        contentStyle={contentStyle}
        contentArrowStyle={arrowStyle}
        iconStyle={{ background: '#4caf50', color: '#fff' }}
        icon={<FaBox />}
      >
        <h3 className="vertical-timeline-element-title">Order Placed - 9.29am</h3>
        <p>The customer confirmed the order.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--process"
        date="09:30 AM"
        contentStyle={contentStyle}
        contentArrowStyle={arrowStyle}
        iconStyle={{ background: '#2196f3', color: '#fff' }}
        icon={<FaCogs />}
      >
        <h3 className="vertical-timeline-element-title">Order Processed - 9.30am</h3>
        <p>Items packed and drone dispatched.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--dock"
        date="09:31 AM"
        contentStyle={contentStyle}
        contentArrowStyle={arrowStyle}
        iconStyle={{ background: '#ff9800', color: '#fff' }}
        icon={<FaWarehouse />}
      >
        <h3 className="vertical-timeline-element-title">Order Docked - 9.31am</h3>
        <p>Drone loaded and ready for flight.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--delivery"
        date="09:38 AM"
        contentStyle={contentStyle}
        contentArrowStyle={arrowStyle}
        iconStyle={{ background: '#9c27b0', color: '#fff' }}
        icon={<FaUserCheck />}
      >
        <h3 className="vertical-timeline-element-title">Order Delivered - 9.38am</h3>
        <p>Package reached the customer safely.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--return"
        date="09:46 AM"
        contentStyle={contentStyle}
        contentArrowStyle={arrowStyle}
        iconStyle={{ background: '#607d8b', color: '#fff' }}
        icon={<FaRocket />}
      >
        <h3 className="vertical-timeline-element-title">Drone Returned to Hub - 9.46am</h3>
        <p>Drone completed the mission and landed back.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
