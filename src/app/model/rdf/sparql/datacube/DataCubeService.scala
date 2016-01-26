package model.rdf.sparql.datacube

import model.entity.{PipelineEvaluation, DataSourceTemplateEagerBox, DataSourceTemplate}
import model.rdf.LocalizedValue
import play.api.libs.iteratee.Enumerator
import play.api.libs.json.JsValue

trait DataCubeService {

  def getDatasets(evaluation: PipelineEvaluation): Seq[DataCubeDataset]

  def getDataStructures(evaluation: PipelineEvaluation): Seq[DataCubeDataStructure]

  def getDataStructureComponents(evaluation: PipelineEvaluation, uri: String, isTolerant: Boolean = false): Seq[DataCubeComponent]

  def getLabels(uri: String) : Option[LocalizedValue]

  def getValues(evaluation: PipelineEvaluation, uris: List[String]): Map[String, Option[Seq[DataCubeComponentValue]]]

  def sliceCubeAndPersist(evaluation: PipelineEvaluation, queryData: DataCubeQueryData, queryDataJson: JsValue)
    (implicit rs: play.api.db.slick.Config.driver.simple.Session): DataCubeQueryResult

}
