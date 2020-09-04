import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {OpExecutor} from 'org_xprof/frontend/app/common/constants/enums';
import {ChartDataInfo, DataType} from 'org_xprof/frontend/app/common/interfaces/chart';
import {TensorflowStatsDataOrNull} from 'org_xprof/frontend/app/common/interfaces/data_table';

import {OperationsTableDataProvider} from './operations_table_data_provider';

/** An operations table view component. */
@Component({
  selector: 'operations-table',
  templateUrl: './operations_table.ng.html',
  styleUrls: ['./operations_table.scss']
})
export class OperationsTable implements OnChanges {
  /** The tensorflow stats data. */
  @Input() tensorflowStatsData: TensorflowStatsDataOrNull = null;

  /** The Op executor. */
  @Input() opExecutor: OpExecutor = OpExecutor.NONE;

  title = '';
  dataProvider = new OperationsTableDataProvider();
  dataInfo: ChartDataInfo = {
    data: null,
    type: DataType.DATA_TABLE,
    dataProvider: this.dataProvider,
  };

  ngOnChanges(changes: SimpleChanges) {
    if (this.opExecutor === OpExecutor.DEVICE) {
      this.title = 'Device-side TensorFlow operations (grouped by TYPE)';
    } else if (this.opExecutor === OpExecutor.HOST) {
      this.title = 'Host-side TensorFlow operations (grouped by TYPE)';
    } else {
      this.title = '';
    }
    this.dataProvider.opExecutor = this.opExecutor;
    this.dataInfo = {
      ...this.dataInfo,
      data: this.tensorflowStatsData,
    };
  }
}
